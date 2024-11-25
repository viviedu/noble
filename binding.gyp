{
  'variables': {
    'openssl_fips' : ''
  },
  'targets': [
    {
      'target_name': 'noble',
      'conditions': [
        ['OS=="mac"', {
          'dependencies': [
            'lib/mac/binding.gyp:binding',
          ],
        }]
      ],
    },
  ],
}
