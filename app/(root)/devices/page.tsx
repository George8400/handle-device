import DeviceCard from "@/components/cards/DeviceCard";
import DeviceDetailCard from "@/components/modals/DeviceDetailCard";
import NewDeviceModal from "@/components/modals/NewDeviceModal";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import React from "react";

const fakeDevice = {
	id: 1,
	name: "Device",
	address: "00:00:00:00:00:00",
};

const DevicesPage = () => {
	return (
		<div className="relative w-full h-auto">
			<div className="flex flex-wrap gap-6">
				{new Array(26).fill(fakeDevice)?.map((device, index) => {
					const num = index + 1;

					return (
						<DeviceDetailCard
							key={device.id + num}
							device={{
								...device,
								id: device.id + num,
								name: `${device.name} ${num}`,
							}}
						/>
					);
				})}
			</div>

			<NewDeviceModal />
		</div>
	);
};

export default DevicesPage;
