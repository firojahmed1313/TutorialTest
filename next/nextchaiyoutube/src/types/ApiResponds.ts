import { Massage } from "@/lib/model/User";
export interface ApiResponds{
    success: boolean;
    message: string;
    isAccseptedMessage?: boolean;
    messages?:Array<Massage>;
}