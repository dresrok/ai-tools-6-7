export class User {
  private bAdmin: boolean = false;
  private dBirth: string;
  private sName: string;
  private subordinateArray: User[];
  private iR?: number;

  constructor(sName: string, dBirth: string, subordinateArray: User[]) {
    this.dBirth = dBirth;
    this.sName = sName;
    this.subordinateArray = subordinateArray;
  }

  toString(): string {
    return `User [dateOfBirth=${this.dBirth}, name=${this.sName}, isAdmin=${
      this.bAdmin
    }, subordinates=${JSON.stringify(this.subordinateArray)}, rating=${
      this.iR
    }]`;
  }

  setRating(rating: number): void {
    this.iR = rating;
  }
}
