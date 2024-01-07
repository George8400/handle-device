"use client";

import DeviceDetailCard from "@/components/modals/DeviceDetailCard";
import NewDeviceModal from "@/components/modals/NewDeviceModal";
import { fakeDevice } from "@/data/fakeDevice";
import { fetcher } from "@/lib/fetcher";
import { CircularProgress } from "@nextui-org/react";
import React from "react";
import useSWR from "swr";

const DevicesPage = () => {
	const { data, isLoading } = useSWR("/devices", fetcher, {
		refreshInterval: 15000,
	});

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

			{isLoading && (
				<div className="fixed inset-0 z-50 flex justify-center items-center bg-black/20">
					<CircularProgress />
				</div>
			)}

			<NewDeviceModal />
		</div>
	);
};

export default DevicesPage;
