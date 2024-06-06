import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)
  let isLoggedIn = sessionStorage.getItem("isLogined");

  if(isLoggedIn == "false"){
    router.navigate(['user']);
    alert("Please login first.......");
    return false;
  }
  return true;
};
