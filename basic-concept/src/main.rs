use std::io;

fn main() {
   let s1 = String::from("Hello");
   let len = cal_length(&s1);
   println!("Length of this {} is {}",s1,len)

}

fn cal_length(s: &String) -> usize {
    let len = s.len();
    len
}

fn ev_od_fn(number_range: i32) -> i32 {
    if number_range % 2 == 0 {
        println!("is event");
        number_range
    } else {
        println!("is not event");
        number_range
    }
}
