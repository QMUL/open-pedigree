# Open Pedigree - QMUL Fork

<p align="center">
  <img src="https://repository-images.githubusercontent.com/212736090/2759df80-fe9e-11e9-8fa0-8237e35cbaf7" width="400px" alt="Open Pedigree logo"/>
</p>

A free and open-source pedigree tool powered by PhenoTips®

Open Pedigree is a robust browser-based genomic pedigree drawing solution using
[Prototype](prototypejs.org),
[Raphaël](https://dmitrybaranovskiy.github.io/raphael/), and
[PhenoTips](https://phenotips.com).

<p align="center">
  <a href="https://github.com/phenotips/open-pedigree/actions/workflows/ci.yml">
    <img src="https://github.com/phenotips/open-pedigree/actions/workflows/ci.yml/badge.svg?branch=master" alt="Build status">
  </a>
  <a href="https://opensource.org/licenses/LGPL-2.1" target="_blank">
    <img src="https://img.shields.io/badge/license-LGPL--2.1-blue.svg" alt="LGPL-2.1">
  </a>
</p>

This repository is a fork of
[phenotips/open-pedigree](https://github.com/phenotips/open-pedigree) and
modified for the Centre for Endocrinology at the William Harvey Research
Institute, Barts and The London School of Medicine and Dentistry, Queen Mary
University of London.

<img width="983" alt="image" src="https://user-images.githubusercontent.com/4251264/68103796-e1048080-fe9d-11e9-9353-6b491aae588d.png">

Modifications from phenotips/open-pedigree include:

- To be able to manually add our own disorders and colours
- Use `html` date input
- Additional fields and symbols such as year of birth, sample availability &
  location and whether the individual was tested

Please check out the following forks:

- [aehrc/open-pedigree](https://github.com/aehrc/open-pedigree)
- [Manchester-Centre-for-Genomic-Medicine/open-pedigree](https://github.com/Manchester-Centre-for-Genomic-Medicine/open-pedigree)

## Using the Software

The software is deployed using GitHub pages on
<https://qmul.github.io/open-pedigree/>

For general workflows, it is recommended to export and import using the GA4GH
FHIR file format.

## Developer's Notes

GitHub Pages are built from the `build` branch. Use the command `npm run build`
to create the web files for the software.

See the file `src/app.js`, which specifies the disorders and colours.

## License

Copyright (c) 2019-2022 Gene42 Inc. o/a PhenoTips

Copyright (c) 2022-2026 Sherman Lo, Queen Mary, University of London

Open Pedigree is distributed under the
[LGPL-2.1](https://opensource.org/licenses/LGPL-2.1)
(GNU Lesser General Public License).

You can easily comply with this license by:

- including prominent notice of the use of Open Pedigree in your software
- retaining all copyright notices in the software
- ensuring that any and all changes you make to the software are published and
  open-sourced under the LGPL
