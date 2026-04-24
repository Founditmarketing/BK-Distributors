export function TrustBar() {
  const stats = [
    { label: "Years in Business", value: "20+" },
    { label: "Product Categories", value: "11" },
    { label: "CENLA's Go-To Custom Shop", value: "Local" },
    { label: "Every size project — large or small", value: "Any" }
  ];

  return (
    <div className="bg-[#F5F0E6] h-20 w-full flex items-center justify-around z-40">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center space-x-12">
          {i > 0 && <div className="w-[1px] h-8 bg-dark opacity-10 hidden lg:block"></div>}
          <div className="flex flex-col items-center">
            <span className="serif-heavy text-dark text-xl">{stat.value}</span>
            <span className="mono-label text-dark opacity-50">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
