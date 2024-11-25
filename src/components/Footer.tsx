import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-[#151515] text-white text-xs">
      <div className=" py-4 grid grid-cols-12 max-w-7xl mx-auto w-full p-4">
        <p className="col-span-12 pb-2 md:pb-0 md:col-span-4 font-medium">
          Dr. Baiano Angelo © 2024
        </p>
        <div className="col-span-12 md:col-span-8 flex flex-wrap md:flex-row md:justify-end gap-2 md:gap-4">
          <p>P.IVA 09638051210</p>
          <p>Sede legale: Via Cicori 50, Quarto NA</p>
          <Link href={"#"}>Privacy policy</Link>
          <Link href={"/terms-and-conditions"}>Termini e condizioni</Link>
        </div>
      </div>
    </div>
  );
};
