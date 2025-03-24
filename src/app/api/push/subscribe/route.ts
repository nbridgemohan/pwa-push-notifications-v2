import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const subscription = await request.json();
    
    // Here you would typically store the subscription in your database
    // For this demo, we'll just log it and return success
    console.log('Received subscription:', subscription);
    
    return NextResponse.json({ 
      success: true,
      message: 'Subscription received successfully'
    });
  } catch (error) {
    console.error('Error saving subscription:', error);
    return NextResponse.json(
      { error: 'Failed to save subscription' },
      { status: 500 }
    );
  }
} 