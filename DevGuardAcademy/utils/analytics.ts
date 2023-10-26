const API_ENDPOINT = 'https://your-vercel-project-name.vercel.app/api/track';

export const trackEvent = async (eventType, userId, eventData = {}) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventType,
        userId,
        eventData,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseJson = await response.json();
    console.log('Event tracked:', responseJson);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};
