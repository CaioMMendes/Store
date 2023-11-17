import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

console.log(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});
console.log(123123);

export async function POST(request: Request) {
  console.log(
    "---------------------------------------------------asdasdasdasd-a-sda-sd-a-da-",
  );
  const signature = request.headers.get("stripe-signature");
  console.log("signature", signature);
  if (!signature) {
    return NextResponse.error();
  }

  const text = await request.text();
  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET_KEY,
  );

  //   if (event.type === "checkout.session.async_payment_failed") {
  //     return new NextResponse(
  //       JSON.stringify({
  //         message: "Ocorreu um erro no pagamento",
  //         status: "erro",
  //       }),
  //       {
  //         status: 403,
  //       },
  //     );
  //   }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    if (!session.metadata) {
      return NextResponse.error();
    }
    console.log(session.metadata.orderId);
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      },
    );
    const lineItems = sessionWithLineItems.line_items;
    await prismaClient.userOrder.update({
      where: {
        id: session.metadata.orderId,
      },
      data: {
        status: "PAYMENT_CONFIRMED",
      },
    });
  }

  return NextResponse.json({ received: true });
}
