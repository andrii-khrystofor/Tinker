import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ModalLayoutComponent} from "src/app/layouts/modal-layout/modal-layout.component";
import {MessengerRoutes} from "src/app/types/enums/messenger-routes.enum";
import {RootRoutes} from "src/app/types/enums/root-routes.enum";
import {ChatPlaceholderComponent} from "./chat-placeholder/chat-placeholder.component";
import {ChatComponent} from "./chat/chat.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {MessengerComponent} from "./messenger.component";
import {SettingsComponent} from "./settings/settings.component";
import {ChatCreationComponent} from "./chat-creation/chat-creation.component";

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
          {
            path: MessengerRoutes.CREATE_CHAT,
            component: ChatCreationComponent
          }
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
