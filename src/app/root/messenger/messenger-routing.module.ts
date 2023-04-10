import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModalLayoutComponent } from "src/app/layouts/modal-layout/modal-layout.component";
import { MessengerRoutes } from "src/app/types/enums/messenger-routes.enum";
import { RootRoutes } from "src/app/types/enums/root-routes.enum";
import { ChatPlaceholderComponent } from "./chat-placeholder/chat-placeholder.component";
import { ChatComponent } from "./chat/chat.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { MessengerComponent } from "./messenger.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
	{
		path: MessengerRoutes.EMPTY,
		component: MessengerComponent,
		children: [
			{
				path: `${MessengerRoutes.CHAT}/:id`,
				component: ChatComponent,
			},
			{
				path: MessengerRoutes.EMPTY,
				component: ChatPlaceholderComponent
			},
			{
				path: RootRoutes.MODAL,
				component: ModalLayoutComponent,
				outlet: RootRoutes.MODAL_OUTLET_NAME,
				children: [
					{
						path: MessengerRoutes.SETTINGS,
						component: SettingsComponent
					},
					{
						path: MessengerRoutes.CONTACTS,
						component: ContactsComponent
					},
				],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MessengerRoutingModule { }