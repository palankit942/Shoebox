export function getAddress() {
  return JSON.parse(localStorage.getItem("address")) ?? [];
}

export function updateStorage(address) {
  localStorage.setItem("address", JSON.stringify(address));

  return address;
}
