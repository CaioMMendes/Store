import { createCheckout } from "@/actions/checkout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { TotalProductsOrderCalc } from "../helpers/total-products-order-calc";
import { UserOrderWithUserProductProps, UserProductWithProduct } from "../page";
import AlertDialogCancelOrder from "./alert-dialog-cancel-order";
import ProductOrderItem from "./product-order-item";

interface OrderProductProps {
  product: {
    totalPrice: number;
    id: string;
    name: string;
    slug: string;
    imageURLs: string[];
    description: string;
    basePrice: number;
    categoryId: string;
    discountPercentage: number;
  };
  quantity: number;
  productId: string;
}

const OrderItem = ({ order }: { order: UserOrderWithUserProductProps }) => {
  const updatedAtDate = new Date(order.updatedAt).toLocaleString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const updatedAtHour = new Date(order.updatedAt).toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const totalProductsOrder = TotalProductsOrderCalc(order.userProducts);
  const handlePurchase = async () => {
    const products: OrderProductProps[] = order.userProducts.map((product) => {
      return {
        product: {
          ...product.product,
          totalPrice: Number(product.totalPaid),
          basePrice: Number(product.product.basePrice),
        },
        quantity: product.quantity,
        productId: product.productId,
      };
    });

    const checkout = await createCheckout(products, order.id);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  const totalPaid = order.userProducts.reduce((total, current) => {
    return total + Number(current.totalPaid) * current.quantity;
  }, 0);

  return (
    <Card className="flex flex-col">
      <Accordion type="single" collapsible>
        <AccordionItem value={order.id} className="px-4">
          <AccordionTrigger /* className="hover:underline" */>
            <div className="flex w-full justify-between gap-2">
              <div className="relative flex h-24 w-[25%] flex-col items-center justify-center rounded-lg bg-accent ">
                <Image
                  src={order?.userProducts[0]?.product?.imageURLs[0]}
                  alt={order?.userProducts[0]?.product?.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto max-h-[75%] w-auto max-w-[90%] flex-1"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="flex w-[75%] flex-col items-start justify-center gap-1 ">
                {totalProductsOrder === 1 ? (
                  <p>Pedido com {totalProductsOrder} produto</p>
                ) : (
                  <p>Pedido com {totalProductsOrder} produto(s)</p>
                )}
                <div className="flex w-full flex-wrap gap-1 ">
                  <p>Efetuado em {updatedAtDate}</p>
                  <p>as {updatedAtHour}</p>
                </div>
                <p>Total: R$ {totalPaid.toFixed(2)}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              <div className="flex h-full justify-between ">
                <div className="flex  flex-col gap-1">
                  <p className="text-lg font-semibold">Status</p>
                  <p
                    className={`
                     ${
                       order.status === "PAYMENT_CONFIRMED"
                         ? "text-primary"
                         : "text-orange-600"
                     }`}
                  >
                    {order.status === "PAYMENT_CONFIRMED"
                      ? "Pago"
                      : "Aguardado pagamento"}
                  </p>
                </div>

                {order.status === "PAYMENT_CONFIRMED" && (
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold">Pagamento</p>
                    <p className="opacity-80">Cartão</p>
                  </div>
                )}
                {order.status === "WAITING_FOR_PAYMENT" && (
                  <div className="flex h-full">
                    <Button
                      // variant={"outline"}
                      className="flex h-full w-32 flex-wrap "
                      onClick={handlePurchase}
                    >
                      Realizar Pagamento
                    </Button>
                  </div>
                )}
              </div>
              <Separator />
              {order?.userProducts?.map((product: UserProductWithProduct) => {
                return (
                  <div key={product.id}>
                    <ProductOrderItem product={product} />
                  </div>
                );
              })}
              <Separator />
              <div className="flex w-full  items-center justify-between gap-1 ">
                <p className="font-semi">Total</p>
                <p className="font-semibold">
                  R$ {Number(totalPaid).toFixed(2)}
                </p>
              </div>
              <Separator />
              <AlertDialogCancelOrder orderId={order.id} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
