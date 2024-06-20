import { describe, it, expect } from 'vitest';
import store from './store.svelte';
import * as O from 'effect/Option';

describe('store', () => {
	describe('filter', () => {
		it('filters by index', () => {
			store.filter = O.some('2');
			expect(store.wordlistFiltered).toEqual(['able']);
		});
		it('filters [] by unknown index', () => {
			store.filter = O.some('2121');
			expect(store.wordlistFiltered).toEqual([]);
		});
		it('filters by word', () => {
			store.filter = O.some('zoo');
			expect(store.wordlistFiltered).toEqual(['zoo']);
		});
	});

	it('filters by first two chars', () => {
		store.filter = O.some('zo');
		expect(store.wordlistFiltered).toEqual(['zone', 'zoo']);
	});

	it('filters [] by unknown chars', () => {
		store.filter = O.some('xyz');
		expect(store.wordlistFiltered).toEqual([]);
	});

	it('returns complete word list using no filter', () => {
		store.filter = O.none();
		expect(store.wordlistFiltered.length).toEqual(2048);
	});
});
