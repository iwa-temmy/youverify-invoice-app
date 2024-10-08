import { Dictionary } from "@/types/dictionary";
import { currencySymbol } from "./constants";

export const invoiceActivities: Dictionary[] = [
  {
    id: 1,
    invoiceId: "00239434",
    action: "Invoice Creation",
    time: "Yesterday, 12:05PM",
    user: "Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
  },
  {
    id: 2,
    invoiceId: "00239434",
    time: "Yesterday, 12:05PM",
    action: "Invoice Creation",
    user: "Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
  },
  {
    id: 3,
    invoiceId: "00239434",
    action: "Invoice Creation",
    time: "Yesterday, 12:05PM",
    user: "Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
  },
  {
    id: 4,
    invoiceId: "00239434",
    action: "Invoice Creation",
    time: "Yesterday, 12:05PM",
    user: "Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
  },
];

export const invoices: Dictionary[] = [
  {
    id: 1,
    invoiceId: "1023494 - 2304",
    due_date: "2023-05-19",
    total: "1,311,750.12",
    date_created: "2022-11-27",
    status: "paid",
  },
  {
    id: 2,
    invoiceId: "1023494 - 2304",
    due_date: "2023-05-19",
    total: "1,311,750.12",
    date_created: "2022-11-27",
    status: "overdue",
  },
  {
    id: 3,
    invoiceId: "1023494 - 2304",
    due_date: "2023-05-19",
    total: "1,311,750.12",
    date_created: "2022-12-8",
    status: "draft",
  },
  {
    id: 4,
    invoiceId: "1023494 - 2304",
    due_date: "2023-05-19",
    total: "1,311,750.12",
    date_created: "2022-12-8",
    status: "pending payment",
  },
  {
    id: 5,
    invoiceId: "1023494 - 2304",
    due_date: "2022-05-19",
    total: "1,311,750.12",
    date_created: "2022-12-8",
    status: "paid",
  },
];

export const invoicePreviewActivities: Dictionary[] = [
  {
    id: 1,
    invoiceId: "00239434",
    time: "Today, 12:20 PM",
    title: "You",
    action_details: "00239434/Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
  },
  {
    id: 2,
    invoiceId: "00239434",
    time: "Today, 12:20 PM",
    title: "You",
    user: "Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
  },
  {
    id: 3,
    invoiceId: "00239434",
    time: "Today, 12:20 PM",
    title: "Payment Confirmed",
    user: "Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
    action: "You manually confirmed a partial payment of",
    action_details: `${currencySymbol} $503,000.00`,
  },
  {
    id: 4,
    invoiceId: "00239434",
    time: "Today, 12:20 PM",
    title: "Payment Confirmed",
    user: "Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
    action: "You manually confirmed a partial payment of",
    action_details: `${currencySymbol} $6,000,000.00`,
  },
  {
    id: 5,
    title: "You",
    invoiceId: "00239434",
    time: "Today, 12:20 PM",
    user: "Olaniyi Ojo Adewale",
    user_avatar: "/user-avatar.png",
    action: "You manually confirmed a partial payment of",
    action_details: `${currencySymbol} $6,000,000.00`,
  },
];

export const invoiceItems: Dictionary[] = [
  {
    id: 1,
    name: "Email Marketing",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    unit: 10,
    price: 1500,
  },
  {
    id: 2,
    name: "Video looping effect",
    description: "",
    unit: 6,
    price: 1110500,
  },
  {
    id: 3,
    name: "Grahic design for emails",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    unit: 7,
    price: 2750,
  },
  {
    id: 4,
    name: "Video looping effect",
    description: "",
    unit: 6,
    price: 1110500,
  },
];
