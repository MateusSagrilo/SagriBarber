import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BookingItemProps {
  serviceName: string;
  barberShopName: string;
  barberShopImageUrl: string;
  date: Date;
}

const BookingItem = ({
  serviceName,
  barberShopName,
  barberShopImageUrl,
  date,
}: BookingItemProps) => {
  return (
    <Card className="flex w-full min-w-full flex-row items-center justify-between">
      {/* {ESQUERDA} */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Badge>Confirmado</Badge>
        <div className="flex flex-col gap-2">
          <p className="font-bold">{serviceName}</p>
          <div className="5 flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={barberShopImageUrl} />
            </Avatar>
            <p className="text-muted-foreground text-sm">{barberShopName}</p>
          </div>
        </div>
      </div>

      {/* {DIREITA} */}
      <div className="flex h-full flex-col items-center justify-center p-4 border-l py-3">
        <p className="text-xs capitalize">
          {date.toLocaleDateString('pt-BR',{month: "long"})}
        </p>
        <p>
          {date.toLocaleDateString('pt-BR',{day: "2-digit"})}
        </p>
        <p>
          {date.toLocaleTimeString('pt-BR',{
            hour: "2-digit",
            minute: "2-digit",
            })}
        </p>
      </div>
    </Card>
  );
};

export default BookingItem;
