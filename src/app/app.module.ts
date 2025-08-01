
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes.component';

@NgModule({
  declarations: [NotesComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [NotesComponent]
})
export class AppModule {}
