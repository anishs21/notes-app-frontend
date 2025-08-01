
import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  newNote: Note = { title: '', content: '' };

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getNotes().subscribe(data => this.notes = data);
  }

  addNote() {
    this.notesService.addNote(this.newNote).subscribe(() => {
      this.newNote = { title: '', content: '' };
      this.loadNotes();
    });
  }

  deleteNote(id: string) {
    this.notesService.deleteNote(id).subscribe(() => this.loadNotes());
  }
}
