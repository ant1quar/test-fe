import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

const subject = new Subject<number>();
subject.subscribe(v => console.log('Subject A:', v));
subject.next(1);
subject.subscribe(v => console.log('Subject B:', v)); 
subject.next(2);

const behaviorSubject = new BehaviorSubject<number>(0);
behaviorSubject.subscribe(v => console.log('BehaviorSubject A:', v));
behaviorSubject.next(1);
behaviorSubject.subscribe(v => console.log('BehaviorSubject B:', v)); 
behaviorSubject.next(2);

const replaySubject = new ReplaySubject<number>();
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.subscribe(v => console.log('ReplaySubject A:', v));

const asyncSubject = new AsyncSubject<number>();
asyncSubject.subscribe(v => console.log('AsyncSubject A:', v));
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.subscribe(v => console.log('AsyncSubject B:', v)); 
