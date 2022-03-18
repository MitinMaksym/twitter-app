export const storage = (field: string, value?: string) => {
  if (value) {
    localStorage.setItem(field,value)
  }
  
  return localStorage.getItem(field)
}


