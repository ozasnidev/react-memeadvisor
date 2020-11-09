import  { renderHook } from "@testing-library/react-hooks";
import  { useFetchGif } from "../../../components/hooks/useFetchGif";

describe('useFetchGif custom hook test', () => {
    test('should return the initial state', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif ('Dragon Ball'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
    });    
    test('should return an array with 10 images and a false boolean', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif ('Dragon Ball'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(20);
        expect( loading ).toBeFalsy();
    })
    
});