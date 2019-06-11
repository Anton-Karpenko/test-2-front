import axios from "axios";

export const FETCH_MENU = "FETCH_MENU";

export function fetchMenu(searchTerm = "") {
  const url = "http://127.0.0.1:8000/api/menu-items/?search=" + searchTerm;
  const request = axios.get(url);
  return {
    type: FETCH_MENU,
    payload: request
  };
}
