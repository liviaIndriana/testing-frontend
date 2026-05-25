"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Users, Building2 } from "lucide-react"

import { useUserRuangan } from "../hook/useUserRuangan"

export default function RuanganPage() {
    const { data, loading } = useUserRuangan()

    return (
        <div className="space-y-8">
        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-[#30418F]">
            Ruangan
        </h1>

        {/* LOADING */}
        {loading ? (
            <p className="text-gray-500">Loading...</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item) => (
                <Card
                key={item.id_ruangan}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm p-0"
                >
                <CardHeader className="bg-[#30418F] py-4 flex items-center justify-center">
                    <CardTitle className="text-white text-2xl font-semibold">
                    {item.nama_ruangan}
                    </CardTitle>
                </CardHeader>

                <CardContent className="px-6 py-5 space-y-5">
                    <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-black" />
                    <span className="text-lg text-gray-700">
                        {item.kapasitas}
                    </span>
                    </div>

                    <div className="flex items-center gap-4">
                    <Building2 className="w-6 h-6 text-black" />
                    <span className="text-lg text-gray-700">
                        {item.fasilitas}
                    </span>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        )}
        </div>
    )
}