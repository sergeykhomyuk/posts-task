import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@nitro/layout';
import { postsConfig } from '@nitro/posts/core';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: postsConfig.routes.posts,
      },
      {
        path: postsConfig.routes.posts,
        loadChildren: () =>
          import('@nitro/posts/posts').then((esModule) => esModule.PostsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
