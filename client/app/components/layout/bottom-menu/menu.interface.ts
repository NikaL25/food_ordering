import { TypeRootStackParamList } from "@/navigation/navigation.type";
import { TypeFeatherIconName } from "@/types/icon.interface";

export interface IMenuItem {
    icon: TypeFeatherIconName, 
    path: keyof TypeRootStackParamList
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void