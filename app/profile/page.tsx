import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="p-4 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src="https://placehold.co/64x64"
          alt="Profile"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <p className="font-bold">John Doe</p>
          <p className="text-sm opacity-70">User since: Jan 1, 2024</p>
        </div>
      </div>

      <div className="h-2" />

      <p className="font-bold">Transaction History</p>

      <table className="w-full text-sm">
        <thead className="opacity-70">
          <tr>
            <th className="text-left font-medium">Type</th>
            <th className="text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="py-1">Deposit</td>
            <td className="py-1 text-right">$100.00</td>
          </tr>
          <tr>
            <td className="py-1">Withdraw</td>
            <td className="py-1 text-right">$50.00</td>
          </tr> */}
        </tbody>
      </table>

      <div className="h-5" />

      <p className="text-sm opacity-70 mt-auto">
        New transactions may take up to 30 minutes to appear
      </p>
    </main>
  );
}
