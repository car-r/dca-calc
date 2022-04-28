import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="flex flex-col gap-4">
        <Link className='bg-neutral-200 p-4 rounded-md shadow-md' to='/dca-calc-btc'>Bitcoin DCA Calculator</Link>
        <Link className='bg-neutral-200 p-4 rounded-md shadow-md' to='/dca-calc'>Stonk DCA Calculator</Link>
      </div>
    </main>
  );
}
