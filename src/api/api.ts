import { Transaction } from "../types/model";
import fakeData from "../assets/data.json";

export default function getFromApi(): Array<Transaction> {
  return fakeData.data   
}