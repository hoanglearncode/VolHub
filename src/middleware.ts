// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";



export async function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
};
