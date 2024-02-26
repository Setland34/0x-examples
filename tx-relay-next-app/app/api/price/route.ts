import { type NextRequest } from "next/server";
// import qs from "qs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  try {
    const res = await fetch(
      `https://api.0x.org/tx-relay/v1/swap/price?${searchParams}`,
      {
        headers: {
          "0x-api-key": process.env.NEXT_PUBLIC_0X_API_KEY as string,
          "0x-chain-id": searchParams.get("chainId") as string,
        },
      }
    );
    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
}
