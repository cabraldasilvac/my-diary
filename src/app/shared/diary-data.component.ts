import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { DiaryEntry } from '..//shared/diary-entry.model'

@Injectable({ providedIn: 'root' })
export class DiaryDataService {
    diarySubject = new Subject<DiaryEntry[]>()

    diaryEntries: DiaryEntry[] = [
        new DiaryEntry('jan 1st', 'Entry 1'),
        new DiaryEntry('jan 2nd', 'Hello World'),
        new DiaryEntry('jan 3nd', 'Hello Cabral'),
    ]

    onDelete(index: number) {
        this.diaryEntries.splice(index, 1)
        this.diarySubject.next(this.diaryEntries)
    }
    onAddDiaryEntry(diaryEntry: DiaryEntry) {
        this.diaryEntries.push(diaryEntry)
        this.diarySubject.next(this.diaryEntries)
    }

    getDiaryEntry(index: number) {
        return { ...this.diaryEntries[index] }
    }

    onUpdateEntry(paramId: number, newEntry: DiaryEntry) {
        this.diaryEntries[paramId] = newEntry
        this.diarySubject.next(this.diaryEntries)
    }
}
