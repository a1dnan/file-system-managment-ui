import { FileMo } from './model/file';
import { FileService } from './service/file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  files!: FileMo[];
  file: any;
  userToDelete: any = -1;

  constructor(private fileService: FileService){}

  ngOnInit(): void {
    this.getAllFiles();
  }

  getAllFiles(){
    this.fileService.getAllFiles().subscribe({
      next:(data: FileMo[])=>{
        this.files = data;
        console.log(this.files);
      }
    })
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  submitData() {
    let formData = new FormData();
    formData.set('file', this.file);
    this.fileService.upload(formData).subscribe({
      next:(data) =>{
        window.location.reload()
      }
    })
  }

  delete(){
    if(this.userToDelete){
      console.log('User To delete',this.userToDelete);
      this.fileService.delete(this.userToDelete).subscribe({
        next:()=>{
          this.getAllFiles();
        } 
      })
    }
  }


}
