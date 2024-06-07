import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)
  let isLoggedIn = sessionStorage.getItem("isLogined");

  if(isLoggedIn == "false"){
    alert("Please login first.......");
    router.navigate(['login']);
    return false;
  }
  return true;
};
