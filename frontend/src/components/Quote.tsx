const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col ml-8 p-12 gap-3">
      <p className="text-3xl font-semibold">
        "The customer service I received was exceptional. The support team went
        above and beyond to address my concerns."
      </p>
      <div className="flex content-start flex-col gap-0">
        <h1 className="text-2xl font-semibold">Jules Winnfield</h1>
        <h2 className="font-medium text-gray-600">CEO, Acme Inc</h2>
      </div>
    </div>
  );
};

export default Quote;
