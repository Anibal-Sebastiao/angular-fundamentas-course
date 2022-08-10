import { FormControl } from "@angular/forms"

export function restrictedWords(words: any) {
  return (control: FormControl): {[key: string]: any} | null  => {
    if (!words) return null

    const invalidWords = words.map((word: string) => control.value.includes(word) ? word : null)
      .filter((word: string) => word != null)
    return invalidWords
      ? {'restrictedWords': invalidWords.join(',')}
      : null
  }
}
