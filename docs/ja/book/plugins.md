---
layout: content
title: プラグイン
prev: コマンドのエスケープ
next: END
link_prev: /ja/escaping.html
link_next: /
---

プラグインを用いることでNuの機能を拡張することができます。プラグインは、Nuの組み込みコマンドと同じ操作の多くを実行することができ、Nu本体とは別に追加できるという利点もあります。

プラグインを追加するには、ビルドしてPATHにバイナリーを配置するだけです。Nuのプラグインは、PATH内の他のバイナリーと区別できるように`nu_plugin_`というファイル名ではじまります。

**注:** 将来的には、プラグインはNuがみつけられるように特定の場所に配置されることになるかもしれません。

Nuが起動すると、システムがスキャンされ、見つかったプラグインがロードされます。

Nuプラグインが利用するプロトコルはNuの開発中に変更される可能性があります。プロトコルの詳細と独自のプラグインの作成方法を学ぶのに最適なのは、[Nuリポジトリのプラグインのソース](https://github.com/nushell/nushell/tree/master/src/plugins)を読むことです。
[コントリビュータブックのプラグインの章](https://github.com/nushell/contributor-book/blob/master/en/plugins.md)も参照してください。