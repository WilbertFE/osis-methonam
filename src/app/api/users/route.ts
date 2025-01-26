import { NextResponse, NextRequest } from "next/server";

export function PUT(request: NextRequest) {
  const res = NextResponse;
  console.log("req: ", request);
  return res;
}
