class Block{
  constructor(x, m, v, w){
    this.x = x;
    this.w = w;
    this.m = m;
    this.v = v;
    this.y = height - w;
  }
  elastic(other){
    let term_1 = ( (this.m - other.m) / (this.m + other.m) ) * this.v;
    let term_2 = ( (2*other.m) / (this.m + other.m) ) * other.v;
    let new_v_1 = term_1 + term_2;
    term_1 = ( (2*this.m) / (this.m + other.m) ) * this.v;
    term_2 = ( (other.m - this.m) / (this.m + other.m) ) * other.v;
    other.v = term_1 + term_2;
    this.v = new_v_1;
  }
  collision(other){
    if (this.x + this.w > other.x){
      other.x = this.x + this.w;
      this.elastic(other);
      collisions += 1;
    } 
  }
  collide_wall(){
    if (this.x < 0){
      collisions += 1;
      this.x = 0;
      this.v *= -1;
    }
  }
 
  update(){
    this.x += this.v;
  }
  display(){
    rect(this.x, this.y, this.w);
    print(collisions);
  }
  
}