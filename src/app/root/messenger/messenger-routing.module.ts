import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MessengerRoutes } from "src/app/types/enums/messenger-routes.enum";
import { ChatComponent } from "./chat/chat.component";
import { MessengerComponent } from "./messenger.component";

const routes: Routes = [
    {
      path: MessengerRoutes.EMPTY,
      component: MessengerComponent,
          children: [
            {
              path: `${MessengerRoutes.CHAT}/:id`,
              component: ChatComponent,
            }
          ],
        },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class MessengerRoutingModule { }