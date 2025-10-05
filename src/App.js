import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, RefreshCw } from 'lucide-react';

const ActivityGenerator = () => {
  const [planningTime, setPlanningTime] = useState('');
  const [familySize, setFamilySize] = useState('');
  const [activity, setActivity] = useState(null);

  const activities = {
    immediate: [
      { name: "Family Board Game Night", description: "Pull out your favorite board games and have a tournament", time: "1-3 hours", prep: "None - just grab games from the shelf!" },
      { name: "Backyard Picnic", description: "Spread a blanket outside and eat dinner picnic-style", time: "1-2 hours", prep: "Just grab food from the kitchen" },
      { name: "Movie Marathon", description: "Stream family-friendly movies with popcorn", time: "2-4 hours", prep: "Pop some popcorn and get cozy" },
      { name: "Dance Party", description: "Clear space in the living room and play favorite songs", time: "30min-1 hour", prep: "Just need a speaker or device" },
      { name: "Stargazing", description: "Lay out blankets and look at the stars together", time: "1-2 hours", prep: "Wait for nightfall, bring blankets" },
      { name: "Indoor Camping", description: "Build a blanket fort and 'camp' in the living room", time: "2-3 hours", prep: "Gather blankets, pillows, and flashlights" }
    ],
    sameDay: [
      { name: "Local Park Adventure", description: "Visit a nearby park for hiking, playground, or sports", time: "2-4 hours", prep: "Pack water and snacks" },
      { name: "Cooking Challenge", description: "Each person makes their own pizza or tacos", time: "2-3 hours", prep: "Quick grocery run for ingredients" },
      { name: "Art & Craft Session", description: "Create art projects with supplies from home or a quick store trip", time: "2-3 hours", prep: "Gather or buy basic art supplies" },
      { name: "Family Scavenger Hunt", description: "Create a neighborhood scavenger hunt with fun items to find", time: "1-2 hours", prep: "30 minutes to create the list" },
      { name: "Beach or Lake Visit", description: "Spend the afternoon by the water", time: "3-5 hours", prep: "Pack towels, sunscreen, and snacks" },
      { name: "Mini Golf or Bowling", description: "Head to a local entertainment venue", time: "2-3 hours", prep: "Check hours and drive over" }
    ],
    fewDays: [
      { name: "Zoo or Aquarium Trip", description: "Explore wildlife at a nearby zoo or aquarium", time: "4-6 hours", prep: "Book tickets online, pack lunch" },
      { name: "Hiking Trail Adventure", description: "Research and visit a scenic hiking trail", time: "3-5 hours", prep: "Plan route, pack proper gear and food" },
      { name: "Museum Day", description: "Visit a science, history, or children's museum", time: "3-5 hours", prep: "Check schedules, buy tickets in advance" },
      { name: "Amusement Park Visit", description: "Spend the day at a theme or amusement park", time: "Full day", prep: "Purchase tickets, plan transportation" },
      { name: "Camping Weekend", description: "Book a campsite for an overnight adventure", time: "1-2 days", prep: "Reserve site, gather camping gear" },
      { name: "Family Bike Ride", description: "Plan a scenic bike route with stops", time: "2-4 hours", prep: "Check bikes, plan route with rest spots" }
    ],
    weekPlus: [
      { name: "Weekend Road Trip", description: "Drive to a nearby city or attraction for a mini vacation", time: "2-3 days", prep: "Book accommodation, plan itinerary" },
      { name: "Theme Park Resort", description: "Visit a major theme park with hotel stay", time: "2-4 days", prep: "Book tickets and hotel well in advance" },
      { name: "Beach Vacation", description: "Spend several days at a beach resort", time: "3-7 days", prep: "Book flights/accommodation, plan activities" },
      { name: "National Park Tour", description: "Explore a national park with camping or lodging", time: "3-5 days", prep: "Reserve camping/lodging, plan trails" },
      { name: "Family Reunion", description: "Organize a gathering with extended family", time: "1-3 days", prep: "Coordinate with relatives, plan venue and meals" },
      { name: "Educational Trip", description: "Visit historical sites or cultural landmarks", time: "2-4 days", prep: "Research destinations, book tours and accommodation" }
    ]
  };

  const generateActivity = () => {
    if (!planningTime) return;
    
    const activityList = activities[planningTime];
    const randomIndex = Math.floor(Math.random() * activityList.length);
    setActivity(activityList[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Family Activity Generator
            </h1>
            <p className="text-gray-600">
              Get personalized activity ideas based on your planning time
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                How much time do you have to plan?
              </label>
              <select
                value={planningTime}
                onChange={(e) => setPlanningTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select planning time...</option>
                <option value="immediate">Right now (0-30 minutes)</option>
                <option value="sameDay">Same day (few hours)</option>
                <option value="fewDays">Few days ahead</option>
                <option value="weekPlus">Week or more</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 mr-2" />
                Family size (optional)
              </label>
              <input
                type="number"
                value={familySize}
                onChange={(e) => setFamilySize(e.target.value)}
                placeholder="Number of people"
                min="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={generateActivity}
              disabled={!planningTime}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Generate Activity
            </button>
          </div>

          {activity && (
            <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200 animate-fadeIn">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex-1">
                  {activity.name}
                </h2>
                <button
                  onClick={generateActivity}
                  className="text-purple-600 hover:text-purple-700 p-2"
                  title="Generate another activity"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-gray-700 mb-4 text-lg">
                {activity.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Duration</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Preparation</p>
                    <p className="text-sm text-gray-600">{activity.prep}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityGenerator;