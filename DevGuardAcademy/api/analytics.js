import axios from 'axios';

const API_ENDPOINT = 'https://dev-guard-academy.vercel.app/api/track';

export const trackEvent = async (eventType, userId, eventData = {}) => {
  try {
    const response = await axios.post(API_ENDPOINT, {
      eventType,
      userId,
      eventData,
    });
    console.log('Event tracked:', response.data);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};
