import { debounceTime } from 'rxjs/operators'

export const effects = store => {
  store
    .on('searchInput')
    .pipe(debounceTime(100))
    .subscribe(searchInput => store.set('searchInputThrottled')(searchInput))
}
