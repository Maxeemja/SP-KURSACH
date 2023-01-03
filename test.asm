.386
.model flat, stdcall
option casemap:none
include     C:\\masm32\include\windows.inc
include     C:\\masm32\include\kernel32.inc
include     C:\\masm32\include\\user32.inc
include     C:\\masm32\include\masm32rt.inc
includelib  C:\\masm32\lib\\user32.lib
includelib  C:\\masm32\lib\kernel32.lib
.data
i dword ?
s dword ?
.code
func proc C a:dword,d:dword,n:dword
push 1 
pop i
push a 
pop s
mov ecx,n
WhilePart:
mov eax, a 
add eax, d 
push eax
pop a 
 mov eax, s 
add eax, a 
push eax
pop s 
 mov eax, i 
add eax, 1 
push eax
pop i 
 cmp i,ecx
jne WhilePart
mov eax,a
mov ebx,s
ret
func endp
main proc
push 2
push 2
push 2
call func
fn MessageBox,0,str$(eax),"n-chlen progresii",MB_OK
fn MessageBox,0,str$(ebx),"suma",MB_OK
ret
main ENDP
start:
call main
end start