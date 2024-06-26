"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";

const SearchProduct = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  type SearchProductFormData = z.infer<typeof searchProductFormSchema>;
  const searchProductFormSchema = z.object({
    product: z
      .string({ invalid_type_error: "O valor precisa ser uma string" })
        // .maxLength(2)
      .optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchProductFormData>({
    resolver: zodResolver(searchProductFormSchema),
  });
  const onSubmit = (data: SearchProductFormData) => {
    router.push(`/product/search?product=${data.product}`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
      <div className="flex w-full flex-col gap-2 px-5 pb-3">
        <div className="relative">
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 transform"
          >
            <MagnifyingGlassIcon width={24} height={24} />
          </button>
          <Input
            {...register("product")}
            defaultValue={
              (searchParams.get("product") !== null
                ? searchParams.get("product")
                : "") as string
            }
            className={`${
              !!errors.product
                ? "border-red-500"
                : "focus:ring-1 focus:ring-primary"
            }
             !disabled:opacity-80 border-2 border-solid !placeholder-zinc-400 outline-none`}
            placeholder="Busque aqui seu produto"
          />
        </div>
        {!!errors.product && errors.product?.message && (
          <span className="mt-1 text-xs text-red-500">
            {errors.product?.message}
          </span>
        )}
      </div>
    </form>
  );
};

export default SearchProduct;
