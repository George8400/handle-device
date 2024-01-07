import DeviceCard from "@/components/cards/DeviceCard";
import Line from "@/components/chart/Line";
import TableDevice from "@/components/table/TableDevice";

export default function Home() {
	return (
		<div className="space-y-8">
			<h1 className="font-bold text-3xl">Analysis of the device #4</h1>

			<div className="flex gap-8">
				<DeviceCard
					device={{
						id: 1,
						name: "Device tropea",
						address: "32:33:3434:54:45",
					}}
					className="w-full"
				/>

				<div className="">
					<Line />
				</div>
			</div>

			<div className="">
				<TableDevice />
			</div>
		</div>
	);
}
