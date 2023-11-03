const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className=" flex flex-col gap-2">
      <p className="font-semibold">Descrição</p>
      <p className="text-justify text-sm opacity-80">{description}</p>
    </div>
  );
};

export default ProductDescription;
