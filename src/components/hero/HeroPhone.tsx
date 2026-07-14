import {
    Bell,
    Building2,
    Heart,
    TrendingUp
} from "lucide-react";

export default function HeroPhone() {
    return (
        <div className="relative">

            <div className="relative w-[330px] rounded-[45px] border-[10px] border-black bg-white p-6 shadow-2xl">

                <p className="text-purple-700 font-bold text-2xl">
                    Mama<span className="text-pink-500">Sure</span>
                </p>

                <div className="mt-8">

                    <p className="text-gray-500">
                        Good Morning,
                    </p>

                    <h3 className="font-bold text-xl">
                        Sarah 👋
                    </h3>

                </div>

                <div className="mt-8 rounded-3xl bg-gray-50 p-5">

                    <p className="text-sm text-gray-500">
                        Your Maternity Goal
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-purple-700">
                        KES 120,000
                    </h2>

                    <div className="mt-5 h-3 rounded-full bg-gray-200">

                        <div className="h-full w-[54%] rounded-full bg-purple-700"></div>

                    </div>

                    <div className="mt-3 flex justify-between text-sm">

                        <span>KES 65,000 saved</span>

                        <span>54%</span>

                    </div>

                </div>

                <div className="mt-6 rounded-3xl border p-4">

                    <div className="flex items-center gap-3">

                        <Building2 className="text-purple-700" />

                        <div>

                            <p className="font-semibold">
                                Aga Khan Hospital
                            </p>

                            <p className="text-sm text-gray-500">
                                Preferred Hospital
                            </p>

                        </div>

                    </div>

                </div>

                <div className="mt-5 rounded-3xl border p-4">

                    <p className="text-sm text-gray-500">
                        Next Contribution
                    </p>

                    <h3 className="text-2xl font-bold text-green-600">
                        KES 2,500
                    </h3>

                    <p className="text-sm text-gray-400">
                        Due in 12 days
                    </p>

                </div>

            </div>

            <div className="absolute -left-24 top-20 rounded-2xl bg-white p-4 shadow-xl">

                <Heart className="mb-2 text-pink-500"/>

                <p className="font-semibold">
                    Weekly Tip
                </p>

                <p className="text-sm text-gray-500">
                    Nutrition during pregnancy.
                </p>

            </div>

            <div className="absolute -right-20 top-36 rounded-2xl bg-white p-4 shadow-xl">

                <Building2 className="mb-2 text-purple-700"/>

                <p className="font-semibold">
                    Hospital Selected
                </p>

            </div>

            <div className="absolute -left-20 bottom-36 rounded-2xl bg-white p-4 shadow-xl">

                <TrendingUp className="mb-2 text-green-600"/>

                <p className="font-semibold">
                    Goal Progress
                </p>

            </div>

            <div className="absolute -right-20 bottom-20 rounded-2xl bg-white p-4 shadow-xl">

                <Bell className="mb-2 text-pink-500"/>

                <p className="font-semibold">
                    Reminder
                </p>

            </div>

        </div>
    );
}