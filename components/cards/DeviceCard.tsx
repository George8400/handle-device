import { cn } from "@nextui-org/react";
import React, { memo } from "react";

interface DeviceProps extends React.ComponentPropsWithoutRef<"button"> {
	device: { id: number; name: string; address: string };
}

const DeviceCard = ({ device, className, ...props }: DeviceProps) => {
	return (
		<button
			className={cn(
				"rounded-xl bg-stone-200 flex-grow basis-1/5 p-4 max-h-[300px] aspect-[3/4] cursor-pointer",
				className
			)}
			{...props}
		>
			<h3>{device.name}</h3>
			<p>{device.address}</p>
		</button>
	);
};

export default memo(DeviceCard);
