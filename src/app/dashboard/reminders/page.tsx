import ReminderHeader from "@/components/dashboard/reminders/ReminderHeader";
import ReminderOverview from "@/components/dashboard/reminders/ReminderOverview";
import TodaysSchedule from "@/components/dashboard/reminders/TodaysSchedule";
import UpcomingReminders from "@/components/dashboard/reminders/UpcomingReminders";
import ReminderCategories from "@/components/dashboard/reminders/ReminderCategories";
import WeeklyReminderCalendar from "@/components/dashboard/reminders/WeeklyReminderCalendar";
import ReminderInsights from "@/components/dashboard/reminders/ReminderInsights";
import EmergencyAlerts from "@/components/dashboard/reminders/EmergencyAlerts";
import ReminderSettings from "@/components/dashboard/reminders/ReminderSettings";

export default function RemindersPage() {
  return (
    <main className="space-y-8">

      {/* Header */}

      <ReminderHeader />

      {/* Overview */}

      <ReminderOverview />

      {/* Today's Schedule */}

      <TodaysSchedule />

      {/* Upcoming Reminders */}

      <UpcomingReminders />

      {/* Reminder Categories */}

      <ReminderCategories />

      {/* Weekly Calendar */}

      <WeeklyReminderCalendar />

      {/* AI Insights */}

      <ReminderInsights />

      {/* Emergency Alerts */}

      <EmergencyAlerts />

      {/* Reminder Settings */}

      <ReminderSettings />

    </main>
  );
}