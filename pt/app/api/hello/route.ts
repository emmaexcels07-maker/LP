// app/api/hello/route.ts

import { time, timeStamp } from 'console';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'stranger';
    
    return NextResponse.json({ message: `Hello, ${name}!`,
    timeStamp: new Date().toISOString() 
    poweredBy: process.env.NEXT_PUBLIC_POWERED_BY || 'Next.js'
    });
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const name = body.name;

        if (!name) {
            return NextResponse.json({ error: 'Name is required' }, 
            { status: 400 }
            );
        }

        return NextResponse.json({ 
            message: `Thanks for the post, ${name}!`,
            receivedAt: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid JSON' }, 
            { status: 400 }
        );
    }
}
