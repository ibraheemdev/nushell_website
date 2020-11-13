# Explorando seu sistema

Shells mais antigos permitem que você navegue pelo sistema de arquivos e execute comandos. Shells modernos como o Nu permitem que você faça o mesmo. Vamos dar uma olhada em alguns dos comandos comuns que você vai usar quando estiver interagindo com seu sistema.

## Visualizando o conteúdo de directórios

{% include moving_around/ls_example.md %}

Como vimos em outros capítulos, `ls` é um comando para visualizar o conteúdo de um caminho. Nu retorna o conteúdo como uma tabela que podemos usar adiante.

O comando `ls` também recebe um parâmetro opcional para mudar o que você gostaria de ver. Por exemplo, podemos listar os arquivos cujo nome termina em ".txt".

```shell
> ls *.txt
---+--------------+------+----------+---------+--------------+--------------
 # | name         | type | readonly | size    | accessed     | modified
---+--------------+------+----------+---------+--------------+--------------
 0 | history.txt  | File |          | 1.3 KB  | 2 months ago | a day ago
 1 | readonly.txt | File | readonly | <empty> | 2 months ago | 2 months ago
---+--------------+------+----------+---------+--------------+--------------
```

O asterisco (\*) usado no parâmetro opcional acima "\*.txt" é chamado de coringa. Ele faz uma correspondência com qualquer coisa. Você pode ler o coringa "\*.txt" como "aceite qualquer nome de arquivo, desde que termine com '.txt'".

Nu também usa coringas modernos, que permitem acesso a diretórios mais profundos.

```shell
> ls **/*.rs
-----+-----------------------------------------------------+------+----------+----------+----------------+----------------
 #   | name                                                | type | readonly | size     | accessed       | modified
-----+-----------------------------------------------------+------+----------+----------+----------------+----------------
 0   | src/cli.rs                                          | File |          | 19.1 KB  | 15 hours ago   | 15 hours ago
 1   | src/commands/args.rs                                | File |          | 244 B    | 2 months ago   | 2 months ago
 2   | src/commands/autoview.rs                            | File |          | 2.5 KB   | 15 hours ago   | 15 hours ago
 3   | src/commands/cd.rs                                  | File |          | 277 B    | a week ago     | a week ago
 4   | src/commands/classified.rs                          | File |          | 13.5 KB  | 15 hours ago   | 15 hours ago
 5   | src/commands/clip.rs                                | File |          | 2.0 KB   | 2 days ago     | 2 days ago
 ```

Aqui estamos procurando qualquer arquivo cujo nome termine com ".rs" e os dois asteriscos dizem ainda "em qualquer diretório começando a partir daqui".

## Mudando o diretório atual

```shell
> cd new_directory
```

Para mudar do diretório atual para um outro, usamos o comando `cd`. Assim como em outros shells, podemos usar o nome do diretório ou, se quisermos ir para um diretório acima, podemos usar o atalho `..`.

## Comandos de sistema de arquivo

Nu também fornece alguns comandos básicos de sistemas de arquivos que funcionam entre plataformas diferentes.

Podemos mover um item de um lugar para outro usando o comando `mv`.

```shell
> mv item location
```

Podemos copiar um item de um local para outro:

```shell
> cp item location
```

Podemos remover um item:

```shell
> rm item
```

Os três comandos também podem usar os coringas que vimos anteriormente com `ls`.

Por fim, podemos criar um novo diretório usando o comando `mkdir`:

```shell
> mkdir new_directory
```
